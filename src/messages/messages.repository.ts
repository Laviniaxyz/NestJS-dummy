import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: { id: string }) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    console.log(id, 'id');
    console.log(messages[id.id], 'messages');
    return messages[id.id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 99999);
    const newMsgObj = {
      content,
      id,
    };
    messages[id] = newMsgObj;
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
