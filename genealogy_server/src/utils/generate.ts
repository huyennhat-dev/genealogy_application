import tribeModel from "~/models/tribe.schema";

const generateCode = async (length: number = 8): Promise<string> => {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return code;
};

async function generateUniqueTribeCode(length: number): Promise<string> {
  const tribeCode = await generateCode(length);
  const existingCode = await tribeModel.findOne({ code: tribeCode }).exec();
  if (existingCode) {
    return generateUniqueTribeCode(length);
  }
  return tribeCode;
}

export { generateCode, generateUniqueTribeCode };
