@api
Feature: Roles requirements

  @role
  Scenario: Roles have needed permissions.
    Given the following roles have these permissions:
      | role               | permission                |
      | block_manager      | administer blocks         |
      | vocabulary_manager | access taxonomy overview  |
      | vocabulary_manager | administer taxonomy       |
      | anonymous          | access content            |
      | authenticated      | access content            |
