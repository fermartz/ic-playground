import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory as playground_idl,
  canisterId as playground_id,
} from "dfx-generated/playground";
import {
  idlFactory as assistant_idl,
  canisterId as assistant_id,
} from "dfx-generated/assistant";
const ENV = import.meta.env.MODE;
console.log(
  "pro",
  import.meta.env.MODE,
  window.location,
  `${window.location.protocol}${window.location.host}`
);
const agentOptions = {
  host:
    ENV === "production"
      ? `${window.location.protocol}${window.location.host}`
      : "http://localhost:8000",
};

const agent = new HttpAgent(agentOptions);
const playground = Actor.createActor(playground_idl, {
  agent,
  canisterId: playground_id,
});
const assistant = Actor.createActor(assistant_idl, {
  agent,
  canisterId: assistant_id,
});
export { playground, assistant };
