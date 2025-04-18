const express = require('express');
const router = express.Router();
const { verifySignature } = require('@chargily/chargily-pay');

router.post('/', express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString(); // make sure it's string
  }
}), (req, res) => {
  const signature = req.get('signature') || '';
  const payload = req.rawBody;

  if (!verifySignature(payload, signature, process.env.CHARGILY_API_KEY)) {
    return res.sendStatus(403);
  }

  const event = req.body;
  console.log('💰 Webhook received:', event);

  // Handle payment confirmation here (update order status, etc.)
  res.sendStatus(200);
});

module.exports = router;
