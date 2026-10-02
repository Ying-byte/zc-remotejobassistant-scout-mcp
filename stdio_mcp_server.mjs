#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remotejobassistant",
  boardId: "remotejobassistant-official",
  domain: "remotejobassistant.com",
  npmName: "zc-remotejobassistant-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
