class User < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    has_secure_password
    has_many :tickets
    has_many :projects, through: :tickets
end
