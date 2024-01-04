const express = require("express");
const z = require("zod"); //zod is input validation library
const app = express();

app.use(express.json()); //to get -> post body parameter, app.use() -> puts as a first parameter on every route.

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

const schema = z.array(z.number());

// const objSchema = z.object({
//   email: z.string().email(),
//   password: z.string().length(8),
//   country: z.literal("IN").or(z.literal("US")),
// });

/* Input Validation */
app.post("/health-checkup", (req, res) => {
  const { kidneys } = req.body;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "invalid input",
    });
  }

  res.send({ response });
});

/* Global catches(middleware) -> helps you give the user better error message. (aka error handling middlewares which takes 4 arguments) */
// app.use(function (err, req, res, next) {
//   res.json({
//     msg: "Sorry something went wrong :(",
//   });
// });
