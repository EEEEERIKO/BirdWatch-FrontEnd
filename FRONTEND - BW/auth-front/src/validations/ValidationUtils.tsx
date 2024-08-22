export const validatePassword = (password: string, confirmPassword: string): string => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password)) {
        return 'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.';
    }
    if (password !== confirmPassword) {
        return 'Las contraseñas no coinciden.';
    }
    return '';
};
