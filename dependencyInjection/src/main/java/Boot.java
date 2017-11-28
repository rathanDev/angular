
public class Boot {

    public static void main(String[] args) {

//        Battery battery = new XBattery();
        Battery battery = new YBattery();

        Car car = new Car(battery);
        car.start();

        Bike bike = new Bike(battery);
        bike.start();

    }

}
