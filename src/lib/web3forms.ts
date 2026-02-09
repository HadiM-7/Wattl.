export interface Web3FormsData {
  [key: string]: string;
}

export interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export async function submitForm(
  data: Web3FormsData,
  subject: string
): Promise<Web3FormsResponse> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return { success: false, message: "Form configuration error." };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      botcheck: "",
      ...data,
    }),
  });

  const result = await response.json();
  return {
    success: result.success,
    message: result.message || "Something went wrong.",
  };
}
