void setup() {
  Serial.begin(9600); // initialize serial communications
}

// ----- instead of using println, I use print here to create an array for all my data. 
void loop() {
  // read the input pin:
  delay(100);
  // ----- getting data from potentiometer for user aiming. 
  int potentiometer = analogRead(A0);                  
  // remap the pot value to fit in 1 byte:
  int mappedPot = map(potentiometer, 0, 1023, 0, 255); 
  // print it out the serial port:
  Serial.print(mappedPot);   
  Serial.print(",");                             
                          
  int potentiometer1 = analogRead(A1);                  
  // remap the pot value to fit in 1 byte:
  int mappedPot1 = map(potentiometer1, 0, 1023, 0, 255); 
  // print it out the serial port:
  Serial.print(mappedPot1);  
  Serial.print(",");                             

  // ----- getting data from photocell as button, map it out to prevent mis-touched. 
  int photoSensor = analogRead(A2);
  int mappedPhotoSensor = map(photoSensor, 0 ,1000, 0, 50);
  Serial.print(mappedPhotoSensor);  
  Serial.print(",");

  int photoSensor1 = analogRead(A3);
  int mappedPhotoSensor1 = map(photoSensor1, 0 ,1000, 0, 50);
  Serial.print(mappedPhotoSensor1);  
  Serial.print(",");
// ----- using switch to change mode. 
  int button = digitalRead(4);
  // Serial.println("button");
//  delay(50);
  Serial.println(button);
 delay(100);
}