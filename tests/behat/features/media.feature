@api
Feature: Media Requirements

  @media @role
  Scenario: Roles have needed permissions to act on media bundles
    Given the "document" media type exists
    Given the "image" media type exists
    Given the "video" media type exists
    Given the following roles have these permissions:
      | role          | permission              |
      | media_creator | create document media   |
      | media_creator | edit own document media |
      | media_creator | create image media      |
      | media_creator | edit own image media    |
      | media_creator | create video media      |
      | media_creator | edit own video media    |
      | media_manager | create media            |
      | media_manager | update media            |

  @media @role
  Scenario: Roles do not have permissions to act on media bundles
    Given the following roles do not have these permissions:
      | role          | permission                |
      | media_creator | edit any document media   |
      | media_creator | delete any document media |
      | media_creator | delete own document media |
      | media_creator | edit any image media      |
      | media_creator | delete any image media    |
      | media_creator | delete own image media    |
      | media_creator | edit any video media      |
      | media_creator | delete any video media    |
      | media_creator | delete own video media    |
      | media_creator | delete own media          |
      | media_creator | delete any media          |
      | media_manager | delete any document media |
      | media_manager | delete own document media |
      | media_manager | delete any image media    |
      | media_manager | delete own image media    |
      | media_manager | delete any video media    |
      | media_manager | delete own video media    |
      | media_manager | delete own media          |
      | media_manager | delete any media          |
