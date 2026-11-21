async function jsonRequest(url, options = {}) {
  const response = await fetch(url, options);
  const body = await response.json();
  if (!response.ok) throw new Error(`${response.status}: ${body.message || body.error || response.statusText}`);
  return body;
}

async function main() {
  const base = process.env.BASE_URL || 'http://localhost:8080';

  const auth = await jsonRequest(`${base}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'recepcion', password: 'Recepcion123!' })
  });
  if (auth.user.role !== 'recepcion') throw new Error('Login did not return reception role');

  const ticket = await jsonRequest(`${base}/api/queues/tickets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.token}`
    },
    body: JSON.stringify({ service: 'general' })
  });
  if (!ticket.ticket.code) throw new Error('Ticket was not created');

  const operator = await jsonRequest(`${base}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'operador', password: 'Operador123!' })
  });

  const call = await jsonRequest(`${base}/api/calls/next`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${operator.token}`
    },
    body: JSON.stringify({ service: 'general' })
  });
  if (call.call.code !== ticket.ticket.code) throw new Error('Called ticket does not match created ticket');

  await jsonRequest(`${base}/api/calls/${call.call.id}/finish`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${operator.token}`
    },
    body: JSON.stringify({ status: 'completed' })
  });

  const publicBoard = await fetch(`${base}/api/calls/current`);
  if (!publicBoard.ok) throw new Error('Public calls endpoint is unavailable');
  console.log(`Integration OK: login, ticket ${ticket.ticket.code}, call and public endpoint`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
