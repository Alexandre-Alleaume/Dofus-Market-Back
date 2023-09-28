import axios from "axios";
import userDatamapper from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/model/user.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const discordService = {
  async registerDiscord(req, res) {
    console.log("inside register");
    await userDatamapper.saveDiscordToken(req.body);
  },
  async updateDiscord(req, res) {
    await userDatamapper.updateDiscord(req.body);
  },
  async setDiscordPseudo(req, res, next) {
    /* if (!req.session.user.discord_access_token) {
      console.log("hello");
    } else {
      const { data: userResponse } = await axios.get(
        "https://discord.com/api/v8/users/@me",
        {
          headers: {
            Authorization: `Bearer ${req.session.user.discord_access_token}`,
          },
        }
      );
      console.log(userResponse);

      const { username } = userResponse;
      res.locals.user.discord = username;
      console.log(res.locals.user.discord);
      await dataMapper.updateDiscord(username, res.locals.user.user_id);
    } */

    const userTargeted = await userDatamapper.findOneByPseudo(req.params.name);

    if (userTargeted.result.discord_access_token) {
      const { data: userResponse } = await axios.get(
        "https://discord.com/api/v8/users/@me",
        {
          headers: {
            Authorization: `Bearer ${userTargeted.discord_access_token}`,
          },
        }
      );

      const { username } = userResponse;
      userTargeted.discord = username;

      await userDatamapper.updateDiscord(username, req.session.user.id);
    }
    next();
  },
};
