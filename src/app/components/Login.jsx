'use client';

import {useState} from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //Adicione aqui a lógica de envio de dados
        console.log('Email:', email);
        console.log('Password:', password);
                  
    };

    return (
        <div className='container login-container'>
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <label>
                Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </label>
                <label>
                Senha:
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                </label>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
};