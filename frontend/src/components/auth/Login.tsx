import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <div style={{
        display: "flex",
        justifyContent: "center",
        width: "60%",
        height: "100vh",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}>

          <input
            id="outlined-password-input"
            type="password"
            style={{
              width: "60%",
            }}
          />
          <button style={{
            padding: "16px",
            width: "60%",
          }}>
          Sign In
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login;
