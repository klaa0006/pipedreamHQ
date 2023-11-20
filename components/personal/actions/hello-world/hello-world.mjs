export default {
  name: "Hello World",
  version: "0.0.2",
  key: "hello-world",
  description: "my first component via CLI development method",
  props: {
    message: {
      type: 'string',
      label: 'Message',
      description: 'Message to log'
    }
  },
  type: "action",
  methods: {},
  async run({ $ }) {
    $.export("message", this.message);
    console.log(this.message);
    return $.flow.exit("end reason");
  },
};
