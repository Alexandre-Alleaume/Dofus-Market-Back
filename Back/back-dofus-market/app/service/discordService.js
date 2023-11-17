import axios from "axios";
import userDatamapper from "../model/user.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const discordService = {
  async registerDiscord(req, res) {
    await userDatamapper.saveDiscordToken(req.body);
    res.send("Discord updated");
  },
  async updateDiscord(req, res) {
    await userDatamapper.updateDiscord(req.body);
    res.send("Discord updated");
  },
  async setDiscordPseudo(req, res, next) {
    const userTargeted = await userDatamapper.findOneByPseudo(req.params.name);
    if (userTargeted?.result?.discord_access_token) {
      const { data: userResponse } = await axios.get(
        "https://discord.com/api/v8/users/@me",
        {
          headers: {
            Authorization: `Bearer ${userTargeted.result.discord_access_token}`,
          },
        }
      );

      const { username } = userResponse;

      userTargeted.discord = username;

      await userDatamapper.updateDiscord(username, userTargeted.result.id);
    }
    next();
  },
};
