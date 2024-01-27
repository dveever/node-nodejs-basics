const parseEnv = () => {
    const envVars = Object.entries(process.env).map(([key, value]) => `${key}=${value}`).join('; ');
    console.log(envVars);
};

parseEnv();