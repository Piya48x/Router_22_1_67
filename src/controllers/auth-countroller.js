exports.register = (req, res, next) => {
  const { email, password } = req.body;

  // logic

  res.json({ email, password });
};

exports.login = (req, res, next) => {
  res.json({ message: "login" });
};

exports.forgetPassword = (req, res, next) => {
  const { email } = req.body;
  res.json({ email });
};

exports.verifyForgetPassword = (req, res, next) => {
  const { token } = req.params;
  res.json({ token });
};

exports.resetPassword = (req, res, next) => {
  const { token } = req.params;
  const { password } = req.body;
    // check token
  //เปลี่ยน password
  // เก็บ password ใหม่ ลง db
  res.json({ token, password });
};
