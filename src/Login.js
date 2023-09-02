import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  useEffect(() => {
    const labels = document.querySelectorAll('.form-control label');

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split('')
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join('');
    });
  }, []);

  return (
    <div>
      <div className="body-background"></div>
      <div className="card">
        <img src="/img/icit.png" alt="" className="logo" />
        <div className="card-body">
          <form action="/login" method="POST">
            <div className="form-control">
              <input type="text" id="name-log" name="name" required />
              <label htmlFor="name-log" className="form-label">
                Username
              </label>
              <img src="/img/person.svg" className="person" alt="" />
            </div>
            <div className="form-control">
              <input
                type="password"
                id="password-log"
                name="password"
                required
              />
              <label htmlFor="password-log" className="form-label">
                Password
              </label>
              <img src="/img/password.svg" className="password" alt="" />
            </div>
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
