import { User } from "../models/User";

const run = async (): Promise<void> => {
  const existingUser = await User.findOne({ id: "1" });
  let user: User;
  if (!existingUser) {
    user = new User();
    user.name = "Tantely";
    user.id = "1";
    user.email = "tantely.and@onja.org";
    user.emailVerified = null;
    user.image = null;
    await user.save();
  }
  console.log("Seed Complete");
};

export default run;
