export async function sendToTelegram(name, phone, course) {
  const TOKEN = "8589345013:AAFQsCZvQcg76WCzhVPAJh1y0h5ftg1NoaA";
  const CHAT_ID = "5149152346";

  const text = `
📩 *Yangi ariza!*

👤 Ism: ${name}
📞 Telefon: ${phone}
📚 Kurs: ${course}
`;

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "Markdown",
    }),
  });
}
