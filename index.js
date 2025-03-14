const PORT = 8000;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('Event Tracking API');
});

app.get('/organizations', async (req, res) => {
  res.json([
    { id: 0, name: 'Leading EDJE', url: 'htts://leadingedje.com' }
  ]);
})

app.get('/events', async (req, res) => {
  res.json([
    {  id: 0, organizationId: 0, name: 'Meetup', url: 'htts://meetup.com' }
  ]);
})

app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
