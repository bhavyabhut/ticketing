import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@bhavyabhut.developer/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
