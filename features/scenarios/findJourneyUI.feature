@Journey_Planner @Search_Journey @UI

Feature: Journey planner search functionality

    Acceptance Criteria:
    User should be able to find valid travel journey from start to end location when searching on the journey planner.
    Journey returned to user in search results is called valid only when -

    1. Start time of journey is same or more than time to travel provided by user.

    @Search_Journey_LeaveAfter_Valid_Check
    Scenario Outline: Verify search on journey planner returns valid journey
        Given User is on journey planner page
        When User provides "<departing_station>" as start location
        And User provides an "<arriving_station>" as end location
        And User provides a "<travel_date>" to search for journeys
        And User confirms LeaveAfter time search mode is selected
        And User provides a preferred "<travel_time>"
        And User clicks to find journeys
        Then Journeys are displayed
        And Travel options returned have startTime later than "<travel_time>" provided by user


        Examples:
            | departing_station           | arriving_station  | travel_date | travel_time |
            | Springfield Central station | Indooroopilly QLD | Tomorrow    | 5:00pm      |
            | Nerang station              | Robina station    | Tomorrow    | 11:30am     |