import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@bhavyabhut.developer/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
