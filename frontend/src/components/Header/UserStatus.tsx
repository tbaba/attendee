import { useAuth0, User } from "@auth0/auth0-react";

export function UserStatus() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <LogoutButton
        user={user}
        onClick={(origin) => logout({ returnTo: origin })}
      />
    );
  }
  return <LoginButton onClick={loginWithRedirect} />;
}

function LoginButton({ onClick }: { onClick: () => void }) {
  return <button onClick={() => onClick()}>Login</button>;
}

function LogoutButton({
  user,
  onClick,
}: {
  user?: User;
  onClick: (origin: string) => void;
}) {
  if (user == null) {
    return null;
  }

  return (
    <div className="flex justify-center">
      {user && (
        <img
          src={user.picture}
          alt={user.nickname}
          className="rounded-full w-12 h-12"
        />
      )}
      <button onClick={() => onClick(window.location.origin)} className="ml-2">
        Logout
      </button>
    </div>
  );
}
