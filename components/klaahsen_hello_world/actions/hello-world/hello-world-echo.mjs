import hello from "../../hello-world.app.mjs"

export default {
  name: "Hello World Echo",
  version: "0.0.16",
  key: "klaahsen-hello-world-echo",
  description: "My first component via CLI development method",
  props: {
    hello,
    message: {
      propDefinition: [
        hello,
        "message",
      ],
    },
  },
  type: "action",
  methods: {},
  async run({ $ }) {
    $.export("message", this.message);
    console.log(this.message);
    return $.flow.exit("end reason");
  },
};
