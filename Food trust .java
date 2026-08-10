public class FoodTrust {

    static class Restaurant {
        String name;
        double rating;
        int safetyScore;

        Restaurant(String name, double rating, int safetyScore) {
            this.name = name;
            this.rating = rating;
            this.safetyScore = safetyScore;
        }
    }

    public static String recommend(Restaurant restaurant) {

        if (restaurant.safetyScore >= 85) {
            return restaurant.name +
                    " has strong available safety information.";
        }

        if (restaurant.safetyScore >= 70) {
            return restaurant.name +
                    " has moderate available safety information.";
        }

        return restaurant.name +
                " has limited available safety information.";
    }

    public static void main(String[] args) {

        Restaurant restaurant =
                new Restaurant("Green Bowl", 4.5, 92);

        System.out.println("FoodTrust AI");
        System.out.println(recommend(restaurant));
    }
}
