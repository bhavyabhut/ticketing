import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@bhavyabhut.developer/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
