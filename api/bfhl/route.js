export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body.data || [];

    res.status(200).json({
      is_success: true,
      user_id: "vimedha_chaturvedi_02102003",
      email: "vimedha2@gmail.com",
      roll_number: "22BCE7796",
      received_data: data,
    });
  } else {
    res.status(200).send("Use POST method at /api/bfhl");
  }
}
