#include <iostream>
#include <string>
using namespace std;

class Restaurant {
public:
    string name;
    float rating;
    int safetyScore;

    Restaurant(string n, float r, int s) {
        name = n;
        rating = r;
        safetyScore = s;
    }

    void display() {
        cout << "Restaurant: " << name << endl;
        cout << "Rating: " << rating << endl;
        cout << "Food Safety Confidence: "
             << safetyScore << "/100" << endl;
    }

    string recommendation() {

        if (safetyScore >= 85) {
            return "Strong available safety information.";
        }

        if (safetyScore >= 70) {
            return "Moderate available safety information.";
        }

        return "Limited available safety information.";
    }
};

int main() {

    Restaurant restaurant(
        "Green Bowl",
        4.5,
        92
    );

    restaurant.display();

    cout << "FoodTrust AI: "
         << restaurant.recommendation()
         << endl;

    return 0;
}
