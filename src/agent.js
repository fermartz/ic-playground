import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory as playground_idl,
  canisterId as playground_id,
} from "dfx-generated/playground";

const agentOptions = {
  host: "http://localhost:8000",
};

const agent = new HttpAgent(agentOptions);
const playground = Actor.createActor(playground_idl, {
  agent,
  canisterId: playground_id,
});

export { playground };
