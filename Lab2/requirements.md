### Functional Requirements

| ID       | Requirement                                                                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FR1**  | The system must allow administrators to create, edit, view, and delete movies.                                                                                         |
| **FR2**  | The system must allow administrators to manage cinema halls (create, edit, delete), ensuring that each hall has a unique hall number and seat capacity.                |
| **FR3**  | The system must allow defining seats for each hall, including row, number, and seat type (Standard/VIP).                                                               |
| **FR4**  | The system must allow administrators to schedule showtimes for specific movies in specific halls, ensuring that no overlapping showtimes occur in the same hall.       |
| **FR5**  | The system must display upcoming showtimes to customers, including movie details and hall number.                                                                      |
| **FR6**  | The system must allow customers to register and log in using email and password or via third-party authentication services (e.g., Google).                             |
| **FR7**  | The system must allow customers to book seats for a specific showtime, ensuring that the same seat cannot be double-booked for the same showtime.                      |
| **FR8**  | The system must calculate total price based on seat type and ticket cost.                                                                                              |
| **FR9**  | The system must support multiple booking statuses (Reserved, Paid, Cancelled).                                                                                         |
| **FR10** | The system must record payments.                                                                                                                                       |
| **FR11** | The system must allow administrators to view all bookings and their statuses.                                                                                          |
| **FR12** | The system must allow customers to view their booking history.                                                                                                         |
| **FR13** | The system must allow customers to cancel their booking before the showtime starts.                                                                                    |
| **FR14** | When a booking is cancelled or payment is not completed within a specific time limit, the corresponding seats must be released and made available for other customers. |
| **FR15** | The system must support two modes of booking: online (via website) and offline (at the cinema counter).                                                                |
| **FR16** | The system must handle refund processing for paid bookings that have been cancelled in accordance with the cinema’s refund policy.                                     |
| **FR17** | The system must send notifications (email/SMS) about booking confirmation, payment, or cancellation for online transactions.                                           |
| **FR18** | For on-site payments, the system must issue a physical receipt.                                                                                                        |

### Non-Functional Requirements

| ID        | Category                       | Requirement                                                                                                         |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **NFR1**  | Performance & Scalability      | The system must handle at least 100 concurrent users without noticeable performance degradation under normal load.  |
| **NFR2**  | Performance & Scalability      | Average page load time should not exceed 2 seconds under normal network conditions.                                 |
| **NFR3**  | Performance & Scalability      | Booking operations should complete within 3 seconds under normal load.                                              |
| **NFR4**  | Security                       | All user passwords must be stored using strong hashing algorithms (e.g., bcrypt).                                   |
| **NFR5**  | Security                       | The system must use HTTPS for all data transmission.                                                                |
| **NFR6**  | Security                       | Access to administrative functions must be restricted to authorized users only.                                     |
| **NFR7**  | Reliability & Data Integrity   | The system must ensure data consistency across all entities (no orphan bookings or seats).                          |
| **NFR8**  | Reliability & Data Integrity   | The system must perform automated daily backups of all critical data.                                               |
| **NFR9**  | Reliability & Data Integrity   | In case of a system failure, recovery must be possible within 1 hour.                                               |
| **NFR10** | UX & Localization              | The user interface should be intuitive and support both desktop and mobile devices.                                 |
| **NFR11** | UX & Localization              | The system should provide clear feedback for all successful and failed user actions.                                |
| **NFR12** | Architecture & Maintainability | The system’s architecture should support adding new features (e.g., loyalty programs) with minimal code changes.    |
| **NFR13** | Architecture & Maintainability | The codebase should follow clean code and layered architecture principles, ensuring modularity and maintainability. |
| **NFR14** | Performance & Scalability      | The system should support horizontal scaling to handle increased user demand.                                       |
| **NFR15** | UX & Localization              | The system should support multiple languages (e.g., English, Ukrainian).                                            |
| **NFR16** | UX & Localization              | All date and time data must be stored in UTC and displayed according to the user’s local timezone.                  |
