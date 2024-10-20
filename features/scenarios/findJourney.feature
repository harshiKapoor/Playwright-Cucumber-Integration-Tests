@Journey_Planner @Search_Journey_Planner

Feature: Journey planner search functionality

    Acceptance Criteria:
    User should be able to find valid travel journey from start to end location when searching on the journey planner.
    Journey returned to user in search results is called valid only when -

    1. It has Start and end location same as searched by user.
    2. Start time of journey is same or more than time to travel provided by user.


    Scenario Outline: Verify search on journey planner returns valid journey
        Given User is on journey planner page
        When User fills in "<start>" as start location
        And User fills in "<end>" as end loction
        And User selects the "<travelDate>" as date to travel
        And User selects the "<travelTime>" time to travel
        And User clicks on Find Journey
        Then All valid journeys are displayed

        Examples:
            | start                       | end               | travelDate  | travelTime |
            | Springfield Central station | Indooroopilly QLD | Tue, 22 Oct | 5:00pm     |