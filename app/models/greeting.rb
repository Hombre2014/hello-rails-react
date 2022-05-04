class Greeting < ApplicationRecord
  validates :message, presence: true, length: { in: 1..150 }
end
