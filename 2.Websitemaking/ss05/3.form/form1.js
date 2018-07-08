var s5form;
(function (s5form) {
    var frmContact = document.querySelector("#frmContact");
    var txtFirstName = document.querySelector("#txtFirstName");
    frmContact.onsubmit = function () {
        var firstName = txtFirstName.value;
        alert("Hello " + firstName);
        return false;
    };
})(s5form || (s5form = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE1BQU0sQ0FXZjtBQVhELFdBQVUsTUFBTTtJQUNaLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFxQixDQUFDO0lBQzNFLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFxQixDQUFDO0lBQy9FLFVBQVUsQ0FBQyxRQUFRLEdBQUc7UUFDbEIsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUVuQyxLQUFLLENBQUMsV0FBUyxTQUFXLENBQUMsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDLENBQUM7QUFHTixDQUFDLEVBWFMsTUFBTSxLQUFOLE1BQU0sUUFXZiJ9