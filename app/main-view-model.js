var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }
    HelloWorldModel.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }
    };
    return HelloWorldModel;
})(observable_1.Observable);
exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbIkhlbGxvV29ybGRNb2RlbCIsIkhlbGxvV29ybGRNb2RlbC5jb25zdHJ1Y3RvciIsIkhlbGxvV29ybGRNb2RlbC50YXBBY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLDJCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRTNDO0lBQXFDQSxtQ0FBVUE7SUFHM0NBO1FBQ0lDLGlCQUFPQSxDQUFDQTtRQUhMQSxZQUFPQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUl4QkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7SUFDckRBLENBQUNBO0lBRU1ELG1DQUFTQSxHQUFoQkE7UUFDSUUsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7UUFDZkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLEVBQUVBLCtEQUErREEsQ0FBQ0EsQ0FBQ0E7UUFDekZBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLENBQUNBO1lBQ0ZBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFlBQVlBLENBQUNBLENBQUNBO1FBQ3JEQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNMRixzQkFBQ0E7QUFBREEsQ0FBQ0EsQUFqQkQsRUFBcUMsdUJBQVUsRUFpQjlDO0FBakJZLHVCQUFlLGtCQWlCM0IsQ0FBQTtBQUVVLHFCQUFhLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9