const isStrongPassword = password => password.length >= 8 && !password.includes("password") && /[A-Z]/.test(password);
