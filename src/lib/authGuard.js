import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null;
  }

  return session.user;
};

export const requireRole = async (role) => {
  const user = await getCurrentUser();

  if (!user || user.role !== role) {
    return null;
  }

  return user;
};