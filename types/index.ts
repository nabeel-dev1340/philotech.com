export interface CourseFormInput {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
  course: String;
  paymentProof: FileList | File;
}
