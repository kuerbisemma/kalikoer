import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // JSON-Daten vom Frontend erhalten
    const body = await request.json().catch(() => null);
    const email = typeof body?.email === 'string' ? body.email.trim() : '';

    // Email validieren
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Ungültige E-Mail-Adresse' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Server-zu-Server Anfrage an Brevo (kein CORS-Problem)
    const brevoResponse = await fetch(
      'https://b9f75ba7.sibforms.com/serve/MUIFAPfeWxF7WwQcLsNrVrJGSPLQW4jy8YXtZsGAf4JDHjXWuw1hHUtPlILE8Os2rkVVfD9kyVwHJq7Poutmhv2ujjCLelf0Kc0ciehvS_X-Mny9sKa8kAfM8gazwrVOO8you89XUL7Zx_KbdaF-YoiBRlGB9cbzcHjdz0_hR7ppAZgxn8pnWrEi-rsQb45gdZWFwZDpzeecs9TiUg==',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          EMAIL: email,
          email_address_check: '',
          locale: 'de',
        }).toString(),
      }
    );

    if (!brevoResponse.ok) {
      return new Response(
        JSON.stringify({ error: 'Es gab ein Problem beim Absenden. Bitte versuche es später erneut.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Erfolgreiche Antwort von Brevo (egal welcher Status Code)
    return new Response(
      JSON.stringify({ success: true, message: 'E-Mail erfolgreich registriert' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Newsletter API error:', error);
    return new Response(
      JSON.stringify({ error: 'Es gab ein Problem beim Absenden. Bitte versuche es später erneut.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
