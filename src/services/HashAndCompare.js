import bcrypt from 'bcrypt';

export const hash = (plainText,saltRounds = process.env.SALT_ROUND) =>{
    const hashResult = bcrypt.hashSync(plainText,parseInt(saltRounds));
    return hashResult
}

export const compare = (password,hashValue) =>{
    const hashRes = bcrypt.compareSync(password,hashValue);
    return hashRes
}