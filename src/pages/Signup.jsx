import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Message from "../components/Message";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup, error } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const success = await signup(email, password);

    if (success) {
      alert(
        "Signup successful! Please check your email to confirm, then log in."
      );
      navigate("/login");
    }
  }

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="confirm">Confirm password</label>
          <input
            type="password"
            id="confirm"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
        </div>

        {error && <Message message={error} />}

        <div>
          <Button type="primary">Sign Up</Button>
        </div>
      </form>
    </main>
  );
}
