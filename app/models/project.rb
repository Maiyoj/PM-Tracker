class Project < ApplicationRecord
    has_many :tickets
    has_many :users, through: :tickets
    belongs_to :client
end
