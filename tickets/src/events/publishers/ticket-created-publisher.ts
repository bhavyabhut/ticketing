import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@bhavyabhut.developer/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
