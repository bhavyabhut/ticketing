import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@bhavyabhut.developer/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
