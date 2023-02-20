import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@bhavyabhut.developer/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
