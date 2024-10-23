@Journey_Planner @Service_Updates @API

Feature: Journey planner Service Updates API test

    Acceptance Criteria:
    Service Updates are returned when call to api is made

    @Service_Updates_API
    Scenario: Verify call to search api returns journeys
        When call to service updates is done
        Then status ok is returned
        And response is not empty
