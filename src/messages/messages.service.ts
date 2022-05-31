import { MessagesRepository } from './messages.repository';

export class MessagesService {
  // messagesRepo: MessagesRepository;

  // constructor(messagesRepo: MessagesRepository) {
  //   this.messagesRepo = messagesRepo;
  // }
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: { id: string }) {
    console.log(typeof id, 'id0');
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
