module.exports = {
    index: function (req, res) {
        var item = { items: "hello world!" };
        res.view(item);
    },
    login: function (req, res) {
        Member.findOne({ username: req.param("username"), password: req.param("password") }, function (err, mem) {
            if (err) {
                res.json({ error: err });
            }
            if (!mem) {
                res.json({ success: false, msg: "khong tim thay" });
            }
            else {
                res.json({ success: true });
            }
        });
    }
    ,
    register: function (req, res) {
        console.log(req.params.all());
        Member.create(req.params.all(), function (err, member) {

            if (err) {
                res.json({ success: false, error: err });
            }
            console.log("===============================");
            console.log(member);
            console.log("===============================");
            res.json({ success: true, data: member });
        });
    }
};
//POST - http://localhost:1337/member/ajregister